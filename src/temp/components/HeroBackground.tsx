"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import styles from "../about.module.css"

interface HeroBackgroundProps {
  isDark: boolean
}

export default function HeroBackground({ isDark }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null!)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

      if (isDark) {
        gradient.addColorStop(0, "#0f172a")
        gradient.addColorStop(0.5, "#1e293b")
        gradient.addColorStop(1, "#0f172a")
      } else {
        gradient.addColorStop(0, "#e0f2fe")
        gradient.addColorStop(0.5, "#f0f9ff")
        gradient.addColorStop(1, "#e0f2fe")
      }

      return gradient
    }

    class Blob {
      x: number
      y: number
      radius: number
      color: string
      xSpeed: number
      ySpeed: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 100 + 50
        this.color = isDark
          ? `rgba(56, 189, 248, ${Math.random() * 0.2 + 0.05})` 
          : `rgba(59, 130, 246, ${Math.random() * 0.2 + 0.05})` 
        this.xSpeed = (Math.random() - 0.5) * 0.5
        this.ySpeed = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.3 + 0.1
      }

      update() {
        this.x += this.xSpeed
        this.y += this.ySpeed

        if (this.x > canvas.width + this.radius) this.x = -this.radius
        if (this.x < -this.radius) this.x = canvas.width + this.radius
        if (this.y > canvas.height + this.radius) this.y = -this.radius
        if (this.y < -this.radius) this.y = canvas.height + this.radius
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()

        const angleStep = (Math.PI * 2) / 6
        const variationAmount = this.radius * 0.2

        for (let i = 0; i < 6; i++) {
          const angle = i * angleStep
          const nextAngle = (i + 1) * angleStep

          const currentRadius = this.radius + Math.sin(Date.now() * 0.001 + i) * variationAmount
          const nextRadius = this.radius + Math.sin(Date.now() * 0.001 + i + 1) * variationAmount

          const currentX = this.x + Math.cos(angle) * currentRadius
          const currentY = this.y + Math.sin(angle) * currentRadius

          const nextX = this.x + Math.cos(nextAngle) * nextRadius
          const nextY = this.y + Math.sin(nextAngle) * nextRadius

          const cpX1 = this.x + Math.cos(angle + angleStep * 0.3) * currentRadius * 1.2
          const cpY1 = this.y + Math.sin(angle + angleStep * 0.3) * currentRadius * 1.2

          const cpX2 = this.x + Math.cos(nextAngle - angleStep * 0.3) * nextRadius * 1.2
          const cpY2 = this.y + Math.sin(nextAngle - angleStep * 0.3) * nextRadius * 1.2

          if (i === 0) {
            ctx.moveTo(currentX, currentY)
          }

          ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, nextX, nextY)
        }

        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const blobCount = 6
    const blobs: Blob[] = []

    for (let i = 0; i < blobCount; i++) {
      blobs.push(new Blob())
    }

    let animationFrameId: number

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = createGradient()
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const blob of blobs) {
        blob.update()
        blob.draw()
      }

      addNoiseTexture()

      animationFrameId = requestAnimationFrame(animate)
    }

    const addNoiseTexture = () => {
      if (!ctx) return

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 5 - 2.5
        data[i] = Math.min(255, Math.max(0, data[i] + noise))
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise))
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise))
      }

      ctx.putImageData(imageData, 0, 0)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  const floatingElements = [
    { size: 15, delay: 0, duration: 8, x: "10%", y: "20%" },
    { size: 25, delay: 1.5, duration: 10, x: "85%", y: "15%" },
    { size: 12, delay: 0.8, duration: 12, x: "70%", y: "70%" },
    { size: 20, delay: 2, duration: 9, x: "25%", y: "78%" },
    { size: 18, delay: 1.2, duration: 11, x: "50%", y: "30%" },
  ]

  return (
    <div className={styles.heroBackground}>
      <canvas ref={canvasRef} className={styles.heroCanvas} />

      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className={styles.floatingElement}
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            background: isDark
              ? `rgba(255, 255, 255, ${0.1 + index * 0.02})`
              : `rgba(59, 130, 246, ${0.1 + index * 0.02})`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.7,
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            opacity: { duration: 1, delay: el.delay },
            y: {
              duration: el.duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: el.delay,
            },
            rotate: {
              duration: el.duration * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: el.delay,
            },
          }}
        />
      ))}

      <div className={styles.gridOverlay} />
    </div>
  )
}

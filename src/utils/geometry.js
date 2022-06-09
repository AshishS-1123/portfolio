function polarToCartesian (centerX, centerY, radius, angleInDeg) {
  const angleInRadians = (angleInDeg - 90) * Math.PI / 180.0

  return {
    x: centerX + (radius * Math.cos (angleInRadians)),
    y: centerY + (radius * Math.sin (angleInRadians))
  }
}

export function getPathData (posX, posY, radius, startAngle, endAngle) {
  const start = polarToCartesian (posX, posY, radius, endAngle)
  const end = polarToCartesian (posX, posY, radius, startAngle)

  const largeArcFlag = (endAngle - startAngle <= 180) ? "0" : "1"

  const d = [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join (" ")

  return d
}

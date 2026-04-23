import { toPng } from 'html-to-image'

export async function generateShareCard(element: HTMLElement): Promise<string> {
  return toPng(element, { cacheBust: true, pixelRatio: 2 })
}

export async function shareOrDownload(dataUrl: string, filename: string): Promise<void> {
  const blob = await fetch(dataUrl).then((r) => r.blob())
  const file = new File([blob], filename, { type: 'image/png' })

  if (navigator.share && navigator.canShare({ files: [file] })) {
    await navigator.share({
      title: 'Claude Code Quiz',
      text: 'Testei meus conhecimentos sobre Claude Code!',
      files: [file],
    })
  } else {
    const link = document.createElement('a')
    link.download = filename
    link.href = dataUrl
    link.click()
  }
}

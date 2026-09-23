import type { ReactNode } from 'react'

type ModalProps = { title: string; onClose: () => void; children: ReactNode }

export default function Modal({ title, onClose, children }: ModalProps) {
  return <div className="modal-background" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><div className="modal"><button className="close-button" onClick={onClose} aria-label="Close">×</button><h2>{title}</h2>{children}</div></div>
}

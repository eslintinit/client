import { Button, Input, Textarea } from 'components/atoms'

export const Modal = ({ close, title, body, actions }) => {
  return (
    <div
      className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        onClick={close}
      >
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 18 18"
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
      </div>
      <div className="modal-content py-4 text-left px-6">
        <div className="flex justify-between items-center pb-3 mb-2 mt-2">
          <p className="text-md font-bold text-gray-700">{title}</p>
        </div>
        {body}
        <div className="flex justify-end pt-2 mt-4 mb-2">{actions}</div>
      </div>
    </div>
  )
}

import axios from 'axios'
import { useState, useEffect } from 'react'

export const Comment = ({ comment, advisor }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src={comment.picture}
          alt=""
        />
      </div>
      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>{comment.author}</strong>{' '}
        {advisor && advisor.name && (
          <p className="text-md sm:text-sm">
            {comment.body.replaceAll('{{X}}', advisor.name.split(' ')[0])}
          </p>
        )}
      </div>
    </div>
  )
}

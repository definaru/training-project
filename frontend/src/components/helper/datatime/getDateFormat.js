import React from 'react'

export function getDateFormat(time)
{
    //const datetime  = time.toLocaleString()
    let date = new Date(time)
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }

    let formatted = date.toLocaleDateString('ru-RU', options)
    return (
        <i>{formatted}</i>
    )
}
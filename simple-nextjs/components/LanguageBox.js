import React from 'react'

export default function LanguageBox(props) {
  return (
    <select value={props.language} onChange={(e) => props.onChangeLanguage(e.target.value)}>
      <option value="en">🇺🇸</option>
      <option value="ko">🇰🇷</option>
    </select>
  )
}
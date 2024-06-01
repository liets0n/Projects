const selectAvatar = (e: any, avatarState: any) => {
  const file: any = e?.target?.files[0]
  const reader = new FileReader()

  reader.addEventListener('load', e => {
    const readerTarget: any = e?.target
    avatarState(readerTarget.result)
  })

  reader.readAsDataURL(file)
}

export default selectAvatar

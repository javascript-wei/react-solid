import React from "react"

const Image = (props: { img?: string }) => {
  const { img } = props
  return <>
    <img src={img} />
  </>
}
export default Image;
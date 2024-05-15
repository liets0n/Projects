import { Wrapper } from './styles'

interface Props {
  text: string
}

const Category = ({ text }: Props) => {
  return (
    <Wrapper>
      <p>{text}</p>
    </Wrapper>
  )
}

export default Category

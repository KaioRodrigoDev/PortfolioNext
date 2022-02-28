import Aside from './Aside'

export default function MainContainer({ children }) {
  return (
    <>
      <Aside />
      <div>{children}</div>
    </>
  )
}

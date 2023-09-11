const Ssr = ({message}) => {
  return (
    <main>
      <h1>Hello</h1>
      <p>{message}</p>
    </main>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      message: 'Hello World',
    },
  }
}

export default Ssr


export const metadata={
  title: 'Hola About Page',
  description: 'Pagina con informacion de nuestra app'
}

const AboutLayout = ({children}) => {
  return (
    <>
      <h3>Soy el layout del About Page</h3>
      {children}
    </>
  )
}

export default AboutLayout;
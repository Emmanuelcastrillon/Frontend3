

const headerStyle = {display: 'flex', flexDirection: 'row', justifyContent: 'space-around',color:'green'}

const Header = () => {
  
    const titulos = ['Home', 'Shop', 'Contact', 'About']

    return (
        <div style={headerStyle}>
            {titulos.map((titulo, index) => {
                return <h4 key={index}>{titulo}</h4>
            })}    
        </div>
  ) 
}

export default Header
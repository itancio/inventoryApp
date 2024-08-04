const BoxStyles = {
    className: 'primary',
    width : '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 2
}

const BoxStyles1 = {
    position: 'absolute',
    top: '50%', 
    left: '50%', 
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    sx: {transform: 'translate(-50%, -50%)'}
}   

const BoxStyles2 = {
    className: 'secondary',
    display: 'flex',
    height: '100px',
    width: '800px',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    gap: 2
}

const InventoryList = {
    width: '100%',
    minheight: '150px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 5,
}

export { BoxStyles, BoxStyles1, BoxStyles2, InventoryList}
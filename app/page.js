'use client'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { useState, useEffect } from 'react'
import { Box, Stack, Modal, Typography, Button, TextField } from '@mui/material'
import { firestore } from '@/firebase'
import { collection, doc, docs, getDocs, query, setDoc, deleteDoc, getDoc} from 'firebase/firestore'
import { BoxStyles, BoxStyles1, BoxStyles2, InventoryList } from './components/Boxstyles'
import AddCircleOutlineIcon from '@mui/icons-material'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'

export default function Home() {
  const [inventory, setInventory] = useState([])
  const db_name = 'inventory'

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, db_name))
    const docs = await getDocs(snapshot)
    const inventoryList = []

    if (!docs.empty) {
      docs.forEach((doc) => { 
        inventoryList.push({
          name: doc.id,
          ...doc.data(),
        })
      })
    } else {
      // TODO: replace with your own error handling
      console.log('No documents found')
    }

    setInventory(inventoryList)
  }
  
  updateInventory();

  // Fetch items from the firestore database and update the local InventoryList
  useEffect( () => {
    updateInventory()
  },[])

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, db_name), item)
    const docSnapshot = await getDoc(docRef)
    
    if (docSnapshot.exists()) {
      const {quantity} = docSnapshot.data()
      await setDoc(docRef, { quantity: quantity + 1 })
    } else {
      await setDoc(docRef, { quantity: 1 })
    }
    await updateInventory()
  }

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, db_name), item)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const {quantity} = docSnapshot.data()
      if (quantity === 1) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, { quantity: quantity - 1 })
      }
    }
      await updateInventory()
  }

  const [item, setItem] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box {...BoxStyles} >  
      <Modal open={open} onClose={handleClose}>
        <Box {...BoxStyles1}>
          <Typography variant='h6' > Add Item </Typography>
          <Stack width='100%' direction="row" gap={2} spacing={2}> 
            <TextField 
              variant="outlined"
              fullWidth
              value={item} 
              label="Item" 
              onChange = {(e) => { 
                setItem(e.target.value)
              }}
            />
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => {
                addItem(item)
                setItem('')  // Clear input field after item added to Inventorylist
                handleClose()  // Close modal when item added to Inventorylist
    
              }}
            >
              Add 
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Box
        border={'1px solid #333'}>
        <Box {...BoxStyles2}>
          <Typography variant='h2' > 
          Inventory List
          </Typography>

        </Box>
        <Stack width="800px" height="300px" spacing={2} overflow={'auto'}>
          {inventory.map(({name, quantity}) => {
              return (
                  <Box {...InventoryList} key={name}>
                      <Typography variant='h4' color='333' textAlign='center'>
                          {name}
                      </Typography>
                      <Stack direction='row' spacing= {3}>
                        <Button variant='contained' onClick={() => removeItem(name)}>
                          remove
                        </Button>
                        <Typography variant='h5' color='333' textAlign='center'>
                            {quantity}
                        </Typography>
                        
                        <Button variant='contained' onClick={() => addItem(name)}>
                          add
                        </Button>
                     </Stack>
                  </Box>
              );
          })}
        </Stack>
      </Box>
      <Button 
        variant="contained"
        onClick={() => { handleOpen() }}
      > 
        Add New Item
      </Button>
    </Box>
  )
}
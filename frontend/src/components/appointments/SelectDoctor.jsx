import Image from 'next/image'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function SelectDoctor( {selectedDoctor, setSelectedDoctor, allDoctors} ) {
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='flex flex-row'>
        <button
            className='py-2 px-4 w-1/3 text-white font-medium rounded-md shadow-2xl bg-primary hover:bg-accent transition ease-in-out duration-200'
            type='button'
            onClick={handleOpen}
        >
            {
                selectedDoctor ? 'Change Doctor' : 'Select Doctor'
            }
        </button>
        {
            selectedDoctor && (
                <div className='flex items-center gap-4 px-6 w-2/3'>
                    <Image
                        src= {selectedDoctor?.pfp}
                        alt='doctor'
                        className='w-10 h-10 rounded-full'
                        style={{ objectFit: 'cover' }}
                        width={40}
                        height={40}
                    />
                    <div className='pl-'>
                        <h3 className='text-lg font-semibold'>{selectedDoctor?.name}</h3>
                        <p className='text-sm text-gray-500'>{selectedDoctor?.specialization}</p>
                    </div>
                </div>
            )
        }
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='w-1/2 rounded-xl shadow-2xl'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Show all the doctors here
            <br />
            Sample Doctor 
            TODO: MAKE THIS DYNAMIC
            <div className='w-full flex items-center gap-4'
            onClick={() => {
                setSelectedDoctor({
                    name: 'Dr. John Doe',
                    specialization: 'General Physician',
                    pfp: '/appointment/doctor.png'
                })
                handleClose()
            }}  
            >
                <Image
                    src= '/appointment/doctor.png'
                    alt='doctor'
                    className='w-10 h-10 rounded-full'
                    style={{ objectFit: 'cover' }}
                    width={40}
                    height={40}
                />
                <div className='pl-'>
                    <h3 className='text-lg font-semibold'>Dr. John Doe</h3>
                    <p className='text-sm text-gray-500'>General Physician</p>
                </div>
            </div>

          </Typography>
        </Box>
      </Modal>

    </div>
  )
}

export default SelectDoctor
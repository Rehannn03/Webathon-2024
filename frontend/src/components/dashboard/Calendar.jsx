import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


export default function FullCalenderComponent({ events = [] }) {
    const [isFullScreen, setIsFullScreen] = React.useState(false)
    const style = {
        // full screen modal style
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const handleOpen = () => setIsFullScreen(true);
    const handleClose = () => setIsFullScreen(false);

    
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventColor='#795cfa'
                customButtons={{
                    fullScreen: {
                        text: `${isFullScreen ? 'Close' : 'Expand'}`,
                        click: () => {
                            setIsFullScreen(!isFullScreen)

                        }
                    }
                }}
                eventMouseEnter={(mouseEnterInfo) => {
                    mouseEnterInfo.el.style.cursor = 'pointer'
                }}
                headerToolbar={{
                    end: 'fullScreen today prev,next'
                }}
            />
            <Modal
                open={isFullScreen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={events}
                        eventColor='#795cfa'
                        customButtons={
                            {
                                fullScreen: {
                                    text: `${isFullScreen ? 'Close' : 'Expand'}`,
                                    click: () => {
                                        setIsFullScreen(!isFullScreen)
                                    }
                                }
                            }
                        }
                        eventMouseEnter={(mouseEnterInfo) => {
                            mouseEnterInfo.el.style.cursor = 'pointer'
                        }}
                        headerToolbar={{
                            end: 'fullScreen today prev,next'
                        }}        
                        height={
                            isFullScreen ? '100vh' : '80vh'
                        }
                    />
                </Box>
            </Modal>
        </>
    )
}

function renderEventContent(eventInfo) {
    return (
        <div>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </div>
    )
}
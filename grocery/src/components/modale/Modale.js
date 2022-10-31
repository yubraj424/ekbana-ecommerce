// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     useDisclosure,
//     Text
//   } from '@chakra-ui/react'
//   import MyCart from '../mycart/Mycart'


//   const Modale=()=> {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     return (
//       <>
//         {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
//         <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
//           <ModalOverlay />
//           <ModalContent>
           
//             <div>
//             <MyCart/>
//             </div>
          
//             <ModalCloseButton />
//             <ModalBody>
//             </ModalBody>
  
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   }
//   export default Modale;
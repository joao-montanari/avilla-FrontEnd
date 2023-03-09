import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Popup(props) {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-xs border border-black rounded h-14 m-1 p-1 text-center"
      >
        Abrir popUp
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                    as="h1"
                    className="text-xl text-gray-900"
                    >
                      🏫 Aula: {props.aula}
                    </Dialog.Title>
                    <h3 className='text-lg mt-2 ml-2 text-gray-600'>
                      Instrutor: {props.instrutor}
                    </h3>
                    <h3 className='text-lg mt-2 ml-2 text-gray-600'>
                      Data:
                    </h3>
                    <h3 className='text-lg mt-2 ml-2 text-gray-600'>
                      Sala:
                    </h3>
                    <h3 className='text-xl mt-4'>
                      ⏰ Horário:
                    </h3>
                    <ul className='list-disc text-lg mt-2 ml-7 text-gray-600'>
                      <li>
                        Início:
                      </li>
                      <li>
                        Término:
                      </li>
                    </ul>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full bg-blue-300 p-2 rounded-lg text-blue-900 border border-white hover:border-blue-900 hover:bg-blue-100 duration-500"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

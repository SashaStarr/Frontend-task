


const ModalDelete = ({ modalDelete, onAcceptDelete, onCancelDelete }) => {

    const hidden = modalDelete ? 'modal-panel active' : 'modal-panel'

    return (
        <div className={hidden}>
            <button className="green-button" onClick={() => onAcceptDelete()}>
                Delete
            </button>
            <button className="red-button" onClick={() => onCancelDelete()}>
                Cancel
            </button>
        </div>
    )
}

export default ModalDelete;
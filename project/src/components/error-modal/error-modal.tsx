import './error-modal.css';
type TErrorModalProps = {
  modalErrorText: string,
  onCloseModal: VoidFunction,
};
function ErrorModal({ modalErrorText, onCloseModal }: TErrorModalProps): JSX.Element {
  const handleCloseModal = () => {
    onCloseModal();
  };
  return (
    <div className={`error-modal ${modalErrorText ? 'error-modal--active' : ''}`}>
      <div className="error-modal__container">
        <p className="error-modal__text">{modalErrorText}</p>
        <button className="error-modal__close-button" onClick={handleCloseModal}>OK</button>
      </div>
    </div>
  );
}

export default ErrorModal;

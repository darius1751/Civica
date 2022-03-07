import '../styles/modal.css';
const Modal = ({title,message,handleClose})=>{
    return(
        
        <div className="modal">
            <section className='close' onClick={handleClose}>x</section>
            <header className="title">{title}</header>
            <article className="message">
                {message}
            </article>
        </div>
    )
}
export default Modal;
const CTAButton = ({text}:CTAButtonProps) => {
  const GoToForm = () => {
    const formElement = document.getElementById('form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="ctaButton">
        <button onClick={GoToForm}>{text}</button>
    </div>
  )
}

export default CTAButton
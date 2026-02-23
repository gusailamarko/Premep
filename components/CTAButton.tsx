const CTAButton = ({text}:CTAButtonProps) => {
  return (
    <div className="ctaButton">
        <a href="">
            <button>{text}</button>
        </a>
    </div>
  )
}

export default CTAButton
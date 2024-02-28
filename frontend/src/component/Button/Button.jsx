import "./Button.css"

export default function Button({children}) {
    return(
        <div className="button">
        <button className="button-registration">{children}</button>
      </div>
    )
}
import { CodeCheckStyle } from "./CodeCheckStyle";

export interface CodeCheckProps{
  placeholder: string;
}

export function CodeCheck({placeholder}:CodeCheckProps){
  return(
    <CodeCheckStyle>
          <div className="textField">
            <input
              className="inputTextField"
              placeholder={placeholder}
            />
            <button className="actionCheck" type="submit">
              CHECK
            </button>
          </div>
  </CodeCheckStyle>
  )
}
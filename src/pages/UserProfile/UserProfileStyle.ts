import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const UserProfileStyle = styled.div`
  margin-top: 10vh;
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  margin-left: 40px;
  margin-right: 40px;

  h1{
    font-size: 2.125rem;
    font-weight: 600;
    color: #1B4B66;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .linksSideNavigation {
    display: flex;
    flex-direction: column;
    width: 18vw;
    justify-content: space-between;
    background-color: #f1f1f1;
    height: 450px;
    padding: 10px;
    border-radius: 8px;

    .link {
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        font-size: 1rem;
        color: #13101e;
        font-weight: 500;
      }
    }
  }
  .containerProfile {
    margin-top: 60px;
    h2 {
      font-size: 20px;
      font-weight: 600;
      color: #13101e;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      margin-bottom: 40px;
      margin-top: 30px;
      padding-bottom: 10px;
    }
.containerLogout{
  display: flex;
  justify-content: flex-end;
}
    .profilePicture {
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }
    .buttonDelete {
      display: flex;
      gap: 8px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
      width: ${px2vw(180)};
      height: ${px2vw(38)};
      font-size: ${px2vw(16)};
      font-weight: 500;
      font-size: 14px;
      display: flex;
      text-align: center;
      color: #b00020;
      background: #ffffff;
      border: 2px solid #b00020;
      border-radius: 8px;
    }

    input {
      height: 52px;
      background-color: #f1f1f1;
      border-radius: 4px;
      border: none;
      padding: 16px 12px 16px 16px;
      outline: none;
    }
    .containerInput {
      display: flex;
      flex-direction: column;
    }
    .containerNameComplete {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      input {
        width: 287px;
      }
    }
    .containerEmail {
      width: 585px;
      margin-top: 20px;
    }
    .labelAndDDD{
      display: flex;
      flex-direction: column;
      input{
        width: 80px;
      }
    }
    .containerNumber{
      display: flex;
      align-items: flex-end;
      flex-direction: row;
      margin-top: 20px;

      
      .mobileNumber{
       width: 404px;
       margin-left: -25px;
      }
    }
    .containerDate{
      margin-top: 20px;
      width: 300px;
    }
    .containerPassword{
      width: 287px;
      margin-bottom: 20px;
    }
  }
  .buttonSubmit{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
  }
`;

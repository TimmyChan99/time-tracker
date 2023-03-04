import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #32a071;
  text-align: center;
  padding: 0;
  margin: 130px 0 0 0;
  width: 100%;
`;

export const MainContainer = styled.main`
  width: 80%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 40px 35px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    min-height: 600px;
  }

  h5 {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    margin: 0;
  }

  @media (max-width: 823px) {
    width: 100%;
  }
`;

export const DateRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 20px 0 25px 0;
  border-bottom: 1px solid rgba(45, 167, 113, 0.5);
  width: 100%;

  @media (max-width: 823px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  input {
    display: ${({ isVisible }: { isVisible: boolean }) =>
      isVisible ? 'block' : 'none'};
    border: #32a071 1px solid;
    color: #32a071;
    font-weight: 600;

    &::-webkit-datetime-edit {
      padding: 0 10px;
    }

    &::-webkit-datetime-edit-text {
      color: #32a071;
    }
  }

  span {
    font-size: 20px;
    font-weight: 400;
    color: #2da771;
  }
`;

export const SelectedDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #b1b1b0;
    font-size: 15px;
    font-weight: 700;
  }

  button[id='date'] {
    font-size: 12px;
    font-weight: 400;
    color: #32a071;
    line-height: 18px;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;

  select {
    border: #32a071 1px solid;
    color: #32a071;
    font-weight: 600;
    padding: 9px 14px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    appearance: none;
    background: no-repeat right 10px center;
    outline-color: #32a071;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    width: 130px;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #2da771;
    background-color: #c7f0df;
    border-radius: 10px;
    padding: 10px 5px;
    width: 100%;
    text-align: center;
  }
`;

export const AddButtonContainer = styled.button`
  text-align: center;
  align-self: start;
  background: #c7f0df;
  border-radius: 5px;
  border: none;
  color: #00502e;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
 color: #00502e;
 padding: 10px 0;
 font-size: 14px;
 font-weight: 400;
 border-top: 1px solid rgba(45, 167, 113, 0.5);
}
`;

export const TotalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  span:last-child {
    font-weight: 500;
  }
}
`;

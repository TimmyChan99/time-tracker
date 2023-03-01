import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 80%;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;

  ul {
    list-style: none;
  }

  h5 {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    margin: 0;
  }
`;

export const DateRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 20px 0;
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

export const SeletedDate = styled.div`
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
    outline-color: #32a071;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
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

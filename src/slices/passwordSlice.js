import { createSlice } from '@reduxjs/toolkit';

const uppercase = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 65)
);
const lowercase = uppercase.map((letter) => letter.toLowerCase());
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = Array.from({ length: 95 }, (_, i) =>
  String.fromCharCode(i + 32)
).filter(
  (symbol) => ![...uppercase, ...lowercase, ...numbers].includes(symbol)
);

const initialState = {
  generatePasswordFrom: {
    uppercase,
    lowercase,
    numbers,
    symbols,
  },
  generatedPasswordResult: '',
  password: {
    length: 0,
    level: 0,
  },
  settings: {
    checkboxes: {
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
    },
    level: 0,
  },
  total: {
    level: 0,
    totalStrength: {
      0: {
        title: 'TOO WEAK!',
        style: '#f64a4a',
      },
      1: {
        title: 'TOO WEAK!',
        style: '#f64a4a',
      },
      2: {
        title: 'WEAK',
        style: '#fb7c58',
      },
      3: {
        title: 'MEDIUM',
        style: '#f8cd65',
      },
      4: {
        title: 'STRONG',
        style: '#a4ffaf',
      },
    },
  },
  copied: false,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPasswordLength: (state, { payload }) => {
      state.password.length = payload.value;
      state.password.level = Math.round(payload.value * 0.1);
    },
    setPasswordSettings: (state, { payload }) => {
      state.settings['checkboxes'].uppercase = payload.uppercaseletters;
      state.settings['checkboxes'].lowercase = payload.lowercaseletters;
      state.settings['checkboxes'].numbers = payload.numbers;
      state.settings['checkboxes'].symbols = payload.symbols;
    },
    setPasswordSettingsLevel: (state, { payload }) => {
      payload.value
        ? (state.settings.level += 0.5)
        : (state.settings.level -= 0.5);
    },
    setTotalStrength: (state) => {
      state.total.level = Math.round(
        state.password.level + state.settings.level
      );
    },
    generatePassword: (state) => {
      let sourceArray = [];
      for (let key in state.settings.checkboxes) {
        if (state.settings.checkboxes[key]) {
          sourceArray = [...sourceArray, ...state.generatePasswordFrom[key]];
        }
      }
      for (let i = 0; i < sourceArray.length; i += 1) {
        let j = Math.floor(Math.random() * (i + 1));
        [sourceArray[i], sourceArray[j]] = [sourceArray[j], sourceArray[i]];
      }

      state.generatedPasswordResult = sourceArray
        .slice(0, state.password.length)
        .join('');
    },
    setCopiedToTrue: (state) => {
      state.copied = true;
    },
    setCopiedToFalse: (state) => {
      state.copied = false;
    },
  },
});

export const {
  setPasswordLength,
  setPasswordSettings,
  setPasswordSettingsLevel,
  setTotalStrength,
  generatePassword,
  setCopiedToTrue,
  setCopiedToFalse,
} = passwordSlice.actions;

export const usePasswordLength = (state) => state.password.password.length;
export const usePassword = (state) => state.password.generatedPasswordResult;

export default passwordSlice.reducer;

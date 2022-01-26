import React, { useRef } from 'react';
import { 
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styles from './NewEnityForm.module.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const lang: string[] = [
  'ru',
  'ua',
  'us',
  'jpn',
  'en',
  'uk',
  'kz',
]

export const NewEnityForm: React.FC = () => {

  const classes = useStyles();
  const [language, setlanguage] = React.useState('');
  const [helperText, setHelperText] = React.useState('');
  const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState('');
  const inputRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setlanguage(event.target.value as string); 
  } 

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'сумма') {
      setValue(event.target.value);
      setHelperText('Введите сумму от 0,14 до 2,99');
      setError(false);
      console.log(inputRef.current);
      
    }
    if (event.target.value === 'процент') {
      setValue(event.target.value);
      setHelperText('Введите процент от 10 до 50');
      setError(false);
    }
  };

  return (
    <form className={styles.enityForm}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          onChange={handleChange}
        >
          {
            lang.map((el, i) => (
              <MenuItem key={el+i} value={el}>{el}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <input type="text" required placeholder='свободный текст'/>
      <FormControl component="fieldset" error={error} className={classes.formControl} >
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="сумма" control={<Radio />} label="сумма" />
          <FormControlLabel value="процент" control={<Radio />} label="процент" />
        </RadioGroup>
        <input type="text" required/>
          <span>{helperText}</span>
      </FormControl>
        <div className={styles.searchCity}>
          <input type="text" required/>
          <div>
            <ul>
              {
                
              }
            </ul>
          </div>
        </div>
      <Button variant="contained" color="primary">
        Отправить
      </Button>
      
    </form>
  );
}

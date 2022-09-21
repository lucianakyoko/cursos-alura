import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { Icone } from '../UI';

const claro = <Icone src={ThemeOn} alt='Tema claro' />;
const escuro = <Icone src={ThemeOff} alt='Tema escuro' />;

export default({tema}) => (tema ? escuro : claro)
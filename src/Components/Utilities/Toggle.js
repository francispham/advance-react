import { useToggle } from '../../hooks/useToggle';

// Children Render Props with Custom Hook:
const Toggle = ({ children }) => children(useToggle(false));

export default Toggle;

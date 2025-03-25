import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Toggle from './Toggle';
import * as chakraUI from '@chakra-ui/react';

// Import desde archivo de configuración con las declaraciones
import '../jest.setup';

// Mock para el contexto de Chakra UI
jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react');
  return {
    ...originalModule,
    useColorMode: () => ({
      colorMode: 'light',
      toggleColorMode: jest.fn(),
      setColorMode: jest.fn(),
    }),
  };
});

describe('Toggle Component', () => {
  it('renders correctly', () => {
    render(<Toggle />);
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });

  it('calls toggleColorMode when pointer down', async () => {
    // Configurar mock con jest.fn para poder rastrear las llamadas
    const mockToggleColorMode = jest.fn();
    jest.spyOn(chakraUI, 'useColorMode').mockImplementation(() => ({
      colorMode: 'light',
      toggleColorMode: mockToggleColorMode,
      setColorMode: jest.fn(),
    }));

    // Configurar mock para setTimeout
    jest.useFakeTimers();

    render(<Toggle />);
    const toggleButton = screen.getByRole('button');
    
    // Usar pointerDown en lugar de click para coincidir con el componente real
    fireEvent.pointerDown(toggleButton);
    
    // Avanzar los timers para que se ejecute el setTimeout
    jest.runAllTimers();
    
    // Verificar que toggleColorMode se llamó después del timer
    await waitFor(() => {
      expect(mockToggleColorMode).toHaveBeenCalledTimes(1);
    });
    
    // Restaurar timers reales
    jest.useRealTimers();
  });
});

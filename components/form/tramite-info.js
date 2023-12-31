import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  FormHelperText,
  Flex
} from '@chakra-ui/react'
import React from 'react'

class TramiteInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
  }

  render() {
    return (
      <FormControl>
        <FormLabel fontWeight="light">Información del Trámite</FormLabel>
        <HStack spacing="30px" alignItems="flex-end">
          <Input
            w="50%"
            placeholder="Radicación Número de Ventanilla Única"
            bgColor="rgb(48, 48, 62)"
            color="rgb(255, 255, 255)"
            _placeholder={{ color: 'rgb(172, 172, 178)' }}
            borderColor="rgb(172, 172, 178)"
            my="5px"
            onChange={e => this.props.callbackNumeroVentanilla(e.target.value)}
          />
          <Flex flexDir="column" w="50%">
            <FormHelperText color="white">Fecha de Recepción</FormHelperText>
            <Input
              bgColor="rgb(48, 48, 62)"
              color="rgb(255, 255, 255)"
              _placeholder={{ color: 'rgb(172, 172, 178)' }}
              borderColor="rgb(172, 172, 178)"
              my="5px"
              type="date"
              onChange={e => this.props.callbackFechaRecepcion(e.target.value)}
            />
          </Flex>
        </HStack>
        <HStack spacing="30px">
          <Input
            placeholder="Asunto"
            bgColor="rgb(48, 48, 62)"
            color="rgb(255, 255, 255)"
            _placeholder={{ color: 'rgb(172, 172, 178)' }}
            borderColor="rgb(172, 172, 178)"
            my="5px"
            w="50%"
            onChange={e => this.props.callbackAsuntoTramite(e.target.value)}
          />
          <Select
            bgColor="rgb(48, 48, 62)"
            defaultValue=""
            color="rgb(172, 172, 178)"
            _placeholder={{ color: 'rgb(172, 172, 178)' }}
            borderColor="rgb(172, 172, 178)"
            my="5px"
            w="50%"
            onChange={e => this.props.callbackMedioRecepcion(e.target.value)}
          >
            <option disabled value="">
              --Medio de Recepción--
            </option>
            <option value="WE">Web</option>
            <option value="ES">Escritorio</option>
          </Select>
        </HStack>
      </FormControl>
    )
  }
}

export default TramiteInfo

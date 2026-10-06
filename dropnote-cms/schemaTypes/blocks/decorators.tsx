import type {BlockDecoratorProps} from 'sanity'

// Editor-side rendering for custom decorators, so they look right inside the Studio's rich text input.

export const HighlightIcon = () => <span style={{fontWeight: 700, background: '#fff3a3', color: '#000', padding: '0 2px'}}>H</span>
export const SupIcon = () => <span style={{fontWeight: 600}}>x²</span>
export const SubIcon = () => <span style={{fontWeight: 600}}>x₂</span>

export function HighlightDecorator(props: BlockDecoratorProps) {
  return <mark style={{backgroundColor: '#fff3a3', color: 'inherit'}}>{props.children}</mark>
}

export function SupDecorator(props: BlockDecoratorProps) {
  return <sup>{props.children}</sup>
}

export function SubDecorator(props: BlockDecoratorProps) {
  return <sub>{props.children}</sub>
}

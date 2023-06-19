import {StyleSheet} from 'react-native';

export const HeadSize = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: '900',
  },
  h2: {
    fontSize: 32,
    fontWeight: '900',
  },
  h3: {
    fontSize: 28,
    fontWeight: '700',
  },
  h4: {
    fontSize: 24,
    fontWeight: '700',
  },
  h5: {
    fontSize: 20,
    fontWeight: '700',
  },
  h6: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export const Skins = StyleSheet.create({
  dark: {
    backgroundColor: '#111',
  },
  darkWithOpacity: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  white: {
    backgroundColor: '#fff',
  },
  primary: {
    backgroundColor: '#752bed',
  },
});

export const TextColors = StyleSheet.create({
  dark: {
    color: '#111',
  },
  white: {
    color: '#fff',
  },
});

export const BorderRadius = StyleSheet.create({
  round: {
    borderRadius: 20,
  },
  soft: {
    borderRadius: 12,
  },
  hard: {
    borderRadius: 6,
  },
});

export const Flex = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexShrink: {
    flexShrink: 0,
  },
  full: {
    flex: 1,
  },
});

export const Borders = StyleSheet.create({
  thin: {
    borderWidth: 1,
    borderColor: '#dddddd',
  },
});

import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

interface StatCardProps {
  title: string;
  value: string;
  label?: string;
  accentColor?: string;
}

export function StatCard({ title, value, label, accentColor }: StatCardProps) {
  return (
    <ThemedView style={[styles.card, accentColor ? { borderLeftColor: accentColor, borderLeftWidth: 4 } : {}]}>
      <ThemedText type="defaultSemiBold" style={styles.title}>{title}</ThemedText>
      <ThemedText type="subtitle" style={[styles.value, accentColor ? { color: accentColor } : {}]}>{value}</ThemedText>
      {label ? <ThemedText style={styles.label}>{label}</ThemedText> : null}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  title: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    lineHeight: 28,
  },
  label: {
    fontSize: 12,
    opacity: 0.5,
    marginTop: 4,
  },
});

import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export function BalanceCard() {
  return (
    <ThemedView style={[styles.card, { backgroundColor: '#f5f0e8' }]}>
      <ThemedText type="defaultSemiBold" style={[styles.label, { color: '#2a2a2a' }]}>
        Solde total
      </ThemedText>
      <ThemedText type="title" style={[styles.amount, { color: '#1a1a1a' }]}>
        2 450,00 €
      </ThemedText>
      <ThemedText type="subtitle" style={[styles.sub, { color: '#666' }]}>
        Disponible ce mois
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 8,
  },
  amount: {
    fontSize: 42,
    lineHeight: 48,
    marginBottom: 4,
  },
  sub: {
    fontSize: 14,
    opacity: 0.6,
  },
});

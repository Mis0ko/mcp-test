import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

interface TransactionItemProps {
  name: string;
  amount: string;
  category: string;
  isPositive?: boolean;
}

export function TransactionItem({ name, amount, category, isPositive = false }: TransactionItemProps) {
  return (
    <ThemedView style={styles.row}>
      <View style={styles.info}>
        <ThemedText type="defaultSemiBold">{name}</ThemedText>
        <ThemedText style={styles.category}>{category}</ThemedText>
      </View>
      <ThemedText type="defaultSemiBold" style={isPositive ? { color: '#4caf50' } : { color: '#f44336' }}>
        {isPositive ? '+' : '-'}{amount}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  info: { flex: 1 },
  category: {
    fontSize: 12,
    opacity: 0.5,
    marginTop: 2,
  },
});

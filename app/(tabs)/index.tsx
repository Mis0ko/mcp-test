import { StyleSheet, ScrollView, View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjBsXwU_Y0CXEgWRPAcl5HLZsvsRw0PdWF92jhi7Wdlmxp7PojG5CiqentWAa5I1L6vzJKEINoZ8BH-ZmUiSGYhEbgYT87JGZRPZ7qKVTEA0xaFU4ZXomJZFpO8rnNHz3mwcebX0zl1f-73u-EP929M1xW6ihhYDYwZZmqExieWJ79Sw-lT610GtDBISl_QAo2U7Nu8QMu3QoQMa2KlBR2b6p-LBXLSScnZK_OlpODLUg_YWfY8iyd' }}
              style={styles.profileImg}
            />
            <ThemedText type="title" style={styles.headerTitle}>Overview</ThemedText>
          </View>
          <View style={styles.notif}>
            <ThemedText style={{ fontSize: 22 }}>🔔</ThemedText>
          </View>
        </View>

        {/* Net Worth Hero */}
        <View style={styles.hero}>
          <ThemedText type="subtitle" style={styles.heroLabel}>NET WORTH</ThemedText>
          <ThemedText type="title" style={styles.heroAmount}>$64,500</ThemedText>
          <View style={styles.heroBadge}>
            <ThemedText style={styles.badgeText}>↗ +$12,400 this year</ThemedText>
          </View>
          <ThemedText style={styles.heroSub}>+$1,200 vs last month</ThemedText>
        </View>

        {/* Wealth Card */}
        <View style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Wealth</ThemedText>
          <View style={styles.wealthRow}>
            <ThemedText style={styles.wealthLabel}>Cash</ThemedText>
            <ThemedText style={styles.wealthValue}>$17,200</ThemedText>
          </View>
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: '27%', backgroundColor: '#e5e2e1' }]} />
          </View>

          <View style={styles.wealthRow}>
            <ThemedText style={styles.wealthLabel}>Investments</ThemedText>
            <ThemedText style={styles.wealthValue}>$46,300</ThemedText>
          </View>
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: '71%', backgroundColor: '#53e16f' }]} />
          </View>

          <View style={styles.wealthRow}>
            <ThemedText style={styles.wealthLabel}>Vehicles</ThemedText>
            <ThemedText style={styles.wealthValue}>$13,000</ThemedText>
          </View>
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: '20%', backgroundColor: '#e5e2e1' }]} />
          </View>

          <View style={styles.wealthRow}>
            <ThemedText style={[styles.wealthLabel, { color: '#ffb4ab' }]}>Debts</ThemedText>
            <ThemedText style={[styles.wealthValue, { color: '#ffb4ab' }]}>-$14,000</ThemedText>
          </View>
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: '22%', backgroundColor: '#ff6b6b' }]} />
          </View>
        </View>

        {/* Milestone + Recent Activity in 2-col on md, stacked here */}
        <View style={styles.twoCol}>
          {/* Milestone */}
          <View style={styles.milestoneCard}>
            <ThemedText type="subtitle" style={styles.cardTitle}>Next Milestone</ThemedText>
            <ThemedText style={styles.milestoneSub}>On track for $100k by 2026.</ThemedText>
            <View style={styles.milestoneSvgWrap}>
              <Svg width="160" height="80" viewBox="0 0 100 55">
                {/* Background arc */}
                <Path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#353434"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Progress arc (64%) */}
                <Path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#53e16f"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="125.6"
                  strokeDashoffset="45.2"
                />
              </Svg>
              <View style={styles.milestoneTextWrap}>
                <ThemedText type="title" style={styles.milestonePercent}>64%</ThemedText>
                <ThemedText style={styles.milestoneSubText}>$36k to go</ThemedText>
              </View>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.card}>
          <View style={styles.activityHeader}>
            <ThemedText type="subtitle" style={styles.cardTitle}>Recent Activity</ThemedText>
            <ThemedText style={styles.viewAll}>View All</ThemedText>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <ThemedText style={{ fontSize: 16 }}>🏛</ThemedText>
            </View>
            <View style={styles.activityText}>
              <ThemedText style={styles.activityTitle}>Added to Emergency Fund</ThemedText>
              <ThemedText style={styles.activitySub}>Savings Account</ThemedText>
            </View>
            <ThemedText style={[styles.activityAmount, { color: '#53e16f' }]}>+$500</ThemedText>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <ThemedText style={{ fontSize: 16 }}>📈</ThemedText>
            </View>
            <View style={styles.activityText}>
              <ThemedText style={styles.activityTitle}>Vanguard S&P 500 ETF</ThemedText>
              <ThemedText style={styles.activitySub}>Auto-invest</ThemedText>
            </View>
            <ThemedText style={[styles.activityAmount, { color: '#53e16f' }]}>+$250</ThemedText>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItemActive}>
          <ThemedText style={{ fontSize: 24 }}>🏠</ThemedText>
          <ThemedText style={styles.navLabelActive}>HOME</ThemedText>
        </View>
        <View style={styles.navItem}>
          <ThemedText style={{ fontSize: 22 }}>↔</ThemedText>
          <ThemedText style={styles.navLabel}>TRANS.</ThemedText>
        </View>
        <View style={styles.navItem}>
          <ThemedText style={{ fontSize: 22 }}>💼</ThemedText>
          <ThemedText style={styles.navLabel}>ACCOUNT</ThemedText>
        </View>
        <View style={styles.navItem}>
          <ThemedText style={{ fontSize: 22 }}>👤</ThemedText>
          <ThemedText style={styles.navLabel}>PROFILE</ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141313',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#38383A',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#ffffff',
  },
  notif: {
    padding: 4,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  heroLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.06,
    color: '#c4c7c8',
    marginBottom: 8,
  },
  heroAmount: {
    fontSize: 40,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: -0.02,
    lineHeight: 48,
    marginBottom: 12,
  },
  heroBadge: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#38383A',
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#1C1C1E',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  badgeText: {
    color: '#53e16f',
    fontSize: 14,
    fontWeight: '500',
  },
  heroSub: {
    color: '#c4c7c8',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#1C1C1E',
    borderWidth: 1,
    borderColor: '#38383A',
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 20,
    marginVertical: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 20,
  },
  wealthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  wealthLabel: {
    fontSize: 15,
    color: '#e5e2e1',
  },
  wealthValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
  },
  barBg: {
    height: 4,
    backgroundColor: '#353434',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 16,
  },
  barFill: {
    height: 4,
    borderRadius: 2,
  },
  twoCol: {
    flexDirection: 'row',
    gap: 8,
    marginHorizontal: 20,
  },
  milestoneCard: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    borderWidth: 1,
    borderColor: '#38383A',
    borderRadius: 24,
    padding: 28,
    marginVertical: 12,
  },
  milestoneSub: {
    color: '#c4c7c8',
    fontSize: 14,
    marginBottom: 28,
  },
  milestoneSvgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    position: 'relative',
    marginTop: 8,
  },
  milestoneTextWrap: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 8,
  },
  milestonePercent: {
    fontSize: 28,
    fontWeight: '600',
    color: '#ffffff',
  },
  milestoneSubText: {
    fontSize: 12,
    color: '#c4c7c8',
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAll: {
    color: '#c4c7c8',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.06,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  activityIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#353434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityText: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  activitySub: {
    fontSize: 14,
    color: '#c4c7c8',
  },
  activityAmount: {
    fontSize: 20,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#141313',
    borderTopWidth: 1,
    borderTopColor: '#2c2c2c',
  },
  navItemActive: {
    alignItems: 'center',
    gap: 4,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navLabelActive: {
    color: '#53e16f',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.08,
    textTransform: 'uppercase',
  },
  navLabel: {
    color: '#9e9e9e',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.08,
    textTransform: 'uppercase',
  },
});

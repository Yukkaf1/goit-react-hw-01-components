import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ cards }) => {
  return (
    <StatSection>
      <StatTitle>Upload stats</StatTitle>

      <StatList>
        {cards.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}% </StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

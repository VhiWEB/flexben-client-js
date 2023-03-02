import { gql } from '@apollo/client';
import { periodFragment } from '../fragments/fragments';

/*
 *  ===========
 *  PERIODS
 *  ===========
 */

export const get_periods = gql`
	query periods {
		periods {
			data {
				...periodPart
			}
		}
	}
	${periodFragment}
`;

export const get_current_periods = gql`
	query period_current {
		period_current {
			...periodPart
		}
	}
	${periodFragment}
`;
export const get_upcoming_periods = gql`
	query period_upcoming {
		period_upcoming {
			...periodPart
		}
	}
	${periodFragment}
`;

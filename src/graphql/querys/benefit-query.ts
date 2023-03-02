import { gql } from '@apollo/client';
import { benefitFragment, periodFragment, benefitItemsFragment } from '../fragments/fragments';

/*
 *  ===========
 *  BENEFITS ITEMS
 *  ===========
 */

export const get_all_benefit_items = gql`
	query get_all_benefit_items {
		benefits {
			...benefitPart,
            period {
                ...periodPart
            }
            benefit_items {
                ...benefitItemPart
            }
		}
	}
    ${benefitFragment}, ${periodFragment}, ${benefitItemsFragment}
`;

export const get_period_benefit_items = gql`
	query get_period_benefit_items($period_id: ID!) {
		benefits(period_id: $period_id) {
			...benefitPart,
            period {
                ...periodPart
            }
            benefit_items {
                ...benefitItemPart
            }
		}
	}
    ${benefitFragment}, ${benefitItemsFragment}, ${periodFragment}
`;

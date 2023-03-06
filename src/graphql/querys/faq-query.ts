import { gql } from '@apollo/client';


/*
 *  ===========
 *  FAQ
 *  ===========
 */

export const get_faqs = gql`
	query getFaqs {
		faqs {
			question
			answer
			created_at
			updated_at
			__typename
		}
	}
`;

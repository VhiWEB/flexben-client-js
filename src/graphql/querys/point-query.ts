import { gql } from '@apollo/client';
import { pointFragment } from '../fragments/fragments';

/*
 *  ===========
 *  POINT
 *  ===========
 */

export const get_point = gql`
	query getPoint {
		point {
			...pointPart
		}
	}
	${pointFragment}
`;

import { gql } from '@apollo/client';
import { userFragment } from '../fragments/fragments';

/*
 *  ===========
 *  USER
 *  ===========
 */

export const get_user = gql`
	query getUser {
		me {
			...userPart
		}
	}
	${userFragment}
`;

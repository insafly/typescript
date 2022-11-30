// вспомогательная сущность, которая позволяет структурировать код, если присутствуют однотипные элементы

enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership) // 1
console.log(membershipReverse) // Standart


enum SocialMedia {
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  TWITTER = 'TWITTER',
}

const social = SocialMedia.TWITTER

console.log(social) // TWITTER
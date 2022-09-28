*** 영속성 컨텍스트

₩₩₩java
EntityManager.persist(entity);
₩₩₩

- 엔티티 조회 : 1차 캐시
1차 캐시 -> DB에서 조회

- 영속 엔티티의 동일성 보장

- 엔티티 등록 : 트랜잭션을 지원하는 쓰기 지연
- 엔티티 수정 : 변경 감지(Dirty Checking)

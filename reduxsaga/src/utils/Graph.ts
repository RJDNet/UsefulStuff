import PriorityQueue from './PriorityQueue';

export default class Graph {
  public nodes: Array<string>;
  private adjacencyList: { [index: string]: Array<Object> };

  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node: string): void {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  addEdge(node1: string, node2: string, distance: number): void {
    this.adjacencyList[node1].push({ node: node2, distance: distance });
    this.adjacencyList[node2].push({ node: node1, distance: distance });
  }

  findPath(startNode: string, endNode: string) {
    let times: Record<string, number> = {};
    let backtrace: Record<string, any> = {};
    let pq = new PriorityQueue();

    times[startNode] = 0;

    this.nodes.forEach(node => {
      if (node !== startNode) {
        times[node] = Infinity
      }
    });

    pq.enqueue([startNode, 0]);

    while (!pq.isEmpty()) {
      let shortestStep = pq.dequeue();
      if (shortestStep) {
        let currentNode = shortestStep[0];
        this.adjacencyList[currentNode].forEach((neighbor: any) => {
          let time = times[currentNode] + neighbor.distance;

          if (time < times[neighbor.node]) {
            times[neighbor.node] = time;
            backtrace[neighbor.node] = currentNode;
            pq.enqueue([neighbor.node, time]);
          }
        });
      }
    }

    let path = [endNode];
    let lastStep = endNode;

    while (lastStep !== startNode) {
      path.unshift(backtrace[lastStep])
      lastStep = backtrace[lastStep]
    }

    return {
      path,
      times: times[endNode]
    };
  }

}
